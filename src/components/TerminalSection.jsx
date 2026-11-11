import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TerminalSection() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Alex Rivera\'s Interactive Terminal [Version 2.4.0]\nType "help" to see available commands or click quick suggestions below.' }
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
      outputText = 'visitor: A curious engineer or recruiter exploring elite engineering portfolios.';
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
            <span>DEV PLAYGROUND</span>
          </div>
          <h2 className="section-title">Interactive CLI Console</h2>
          <p className="section-subtitle">
            Query skills, project specs, and background directly through the terminal emulator.
          </p>
        </div>

        {/* Quick Suggestion Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {['help', 'skills', 'projects', 'exp', 'contact', 'stack', 'clear'].map((cmd) => (
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
              <span>alex@fedora-workstation: ~</span>
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
              <span className="terminal-prompt">visitor@alex-dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                className="terminal-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. skills)..."
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
