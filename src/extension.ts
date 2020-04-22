import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// console.log('Congratulations, your extension "openresty-snippets" is now active!');

	let disposable = vscode.commands.registerCommand('openresty-snippets.openDocs', () => {

		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		let selection = editor.selection;


		let text = editor.document.getText(selection);

		var rep = text.replace(/[\.|\:]/gi, '');
		var open = rep.toLocaleLowerCase();
		vscode.env.openExternal(vscode.Uri.parse(`https://devdocs.io/nginx_lua_module/index#${open}`));

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
	// console.log('Congratulations, your extension "openresty-snippets" is now deactivate!');
}
