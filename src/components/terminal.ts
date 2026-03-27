export function renderTerminal(preloadedCommand?: string): string {
  const prefilled = preloadedCommand ? preloadedCommand : '';
  return `
    <div class="terminal" data-terminal>
      <div class="terminal-output" data-terminal-output></div>
      <div class="terminal-input-line">
        <span class="terminal-prompt">$</span>
        <input
          type="text"
          class="terminal-input"
          data-terminal-input
          value="${prefilled}"
          placeholder="输入命令... / Type a command..."
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        />
        <span class="terminal-cursor"></span>
      </div>
    </div>
  `;
}

export function initTerminal(container: HTMLElement): void {
  const terminal = container.querySelector('[data-terminal]');
  if (!terminal) return;

  const output = terminal.querySelector<HTMLElement>('[data-terminal-output]');
  const input = terminal.querySelector<HTMLInputElement>('[data-terminal-input]');
  if (!output || !input) return;

  let commands: Record<string, { terminalResponse: string }> = {};

  // Dynamically import commands data
  import('../data/commands').then((mod) => {
    // Expect the module to export something we can use for pattern matching
    if (mod.commands && Array.isArray(mod.commands)) {
      mod.commands.forEach((cmd: { command: string; terminalResponse: string }) => {
        commands[cmd.command.toLowerCase()] = { terminalResponse: cmd.terminalResponse };
      });
    } else if (mod.commands && typeof mod.commands === 'object') {
      commands = mod.commands;
    }
  }).catch(() => {
    // Commands data not yet available
  });

  function appendOutput(text: string, isCommand?: boolean) {
    if (!output) return;
    const line = document.createElement('div');
    line.className = isCommand ? 'terminal-line terminal-command' : 'terminal-line terminal-response';
    if (isCommand) {
      line.textContent = `$ ${text}`;
    } else {
      line.innerHTML = text;
    }
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  function processCommand(cmd: string) {
    const trimmed = cmd.trim().toLowerCase();
    appendOutput(cmd, true);

    if (trimmed === '' ) return;

    // Pattern match against known commands
    const match = Object.keys(commands).find((key) => {
      return trimmed === key.toLowerCase() || trimmed.startsWith(key.toLowerCase());
    });

    if (match) {
      appendOutput(commands[match].terminalResponse);
    } else if (trimmed === '/help' || trimmed === 'help') {
      const helpLines = Object.keys(commands).map(k => `  ${k}`).join('<br>');
      appendOutput(`可用命令 / Available commands:<br>${helpLines || '  (loading...)'}`);
    } else {
      appendOutput('码小码说：这个命令我还不认识哦！试试 /help？');
    }
  }

  input.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const value = input.value;
      input.value = '';
      processCommand(value);
    }
  });

  // Focus input when terminal is clicked
  terminal.addEventListener('click', () => {
    input.focus();
  });
}
