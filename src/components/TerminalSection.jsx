import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TerminalSection() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Ian Karega Mihuro\'s Interactive Console [v2.4.0]\nType "help" or click the command badges below to inspect technical scale, architecture, and experience.' }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    let outputText = '';
    if (portfolioData.terminalCommands[trimmed]) {
      outputText = portfolioData.terminalCommands[trimmed];
    } else if (trimmed === 'whoami') {
      outputText = 'visitor: Engineering partner, recruiter, or collaborator exploring high-scale systems leadership.';
    } else if (trimmed === 'date') {
      outputText = new Date().toUTCString();
    } else if (trimmed.startsWith('sudo')) {
      outputText = 'sudo: User is not in the sudoers file. This incident will be reported. 😉';
    } else {
      outputText = `zsh: command not found: ${trimmed}. Type "help" for a list of valid commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'command', text: `$ ${trimmed}` },
      { type: 'output', text: outputText },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
    setInputVal('');
  };

  const executeQuickCommand = (cmd) => {
    handleCommand(cmd);
  };

  return (
    <section id="terminal" className="section" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <TerminalIcon size={14} />
            <span>INTERACTIVE CONSOLE</span>
          </div>
          <h2 className="section-title">Terminal & Systems Query</h2>
          <p className="section-subtitle">
            Query production scale metrics, telemetry architectures, and leadership background directly.
          </p>
        </div>

        {/* Quick Suggestion Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {['help', 'skills', 'scale', 'projects', 'exp', 'contact', 'stack', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeQuickCommand(cmd)}
              style={{
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                padding: '0.25rem 0.65rem',
                borderRadius: '0.35rem',
                cursor: 'pointer',
              }}
            >
              $ {cmd}
            </button>
          ))}
        </div>

        <div className="terminal-wrapper" onClick={() => inputRef.current?.focus()}>
          <div className="terminal-header">
            <div className="window-dots">
              <span className="dot-red"></span>
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
            </div>
            <div className="terminal-title">
              <TerminalIcon size={14} />
              <span>ian@m365-lead-station: ~</span>
            </div>
            <div style={{ width: '40px' }}></div>
          </div>

          <div className="terminal-body">
            {history.map((item, idx) => (
              <div key={idx} className={`terminal-line ${item.type}`}>
                {item.text}
              </div>
            ))}

            <form onSubmit={handleSubmit} className="terminal-input-row">
              <span className="terminal-prompt">visitor@ian-dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                className="terminal-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. scale)..."
                autoComplete="off"
                spellCheck="false"
              />
              <button type="submit" style={{ display: 'none' }}>Submit</button>
            </form>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
