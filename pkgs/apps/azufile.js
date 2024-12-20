/*
	AzuFile for AzuOS
	Written by: MTSyntho @ AzuSystem 2024
*/

var entryCSS = (`
	display: flex;
	flex-direction: row;
`)

var defaultdir = ''

win.create("AzuFile", "azufile").then(win => win
	.setWidth(700)
	.setHeight(500)
	.confirm()
);

function addListEntry(name, type) {
	element.create('div', '', `${name}div`).then(elm => elm
		.parent('azufilediv')
		.padding('7px')
		.css(entryCSS)
		.marginbottom('5px')
		.attribute('onclick', `fetchDirectory('${name}')`)
	);	

	if (type === 'file') {
		element.create('img', '', '').then(elm => elm
			.parent(`${name}div`)
			.source('assets/icons/questionmark.svg')
			.height(20)
		);			
	} else if (type === 'folder') {
		element.create('img', '', '').then(elm => elm
			.parent(`${name}div`)
			.source('assets/icons/folderopen.svg')
			.height(20)
		);			
	}

	element.create('p', name, '').then(elm => elm
		.parent(`${name}div`)
		.padding(0)
		.margin(0)
		.marginleft('7px')
	);	
}

function fetchDirectory(folder) {
	var dirlist = document.querySelector(`[codename="azufilediv"]`);
	if (dirlist) {
		dirlist.remove()
	}

	console.log(defaultdir)

	if (defaultdir !== '~/') {
		defaultdir = `${defaultdir}/${folder}`
	} else {
		defaultdir = `~/${folder}`
		console.log(defaultdir)		
	}

    // if (folder) {
    //     if (folder === '..') {
    //         // Go up one level: Remove the last part of the path
    //         defaultdir = defaultdir.split('/').slice(0, -1).join('/');
    //         if (defaultdir === '' || defaultdir === '~') {
    //             defaultdir = '~/'; // Ensure it resets to root
    //         }
    //     } else {
    //         // Append folder without duplicating '~/'
    //         defaultdir = defaultdir === '~/' ? `~/${folder}` : `${defaultdir}/${folder}`;
    //     }
    // }

	console.log(defaultdir)

	// Create List
	element.create('div', '', 'azufilediv').then(elm => elm
		.window('azufile')
		.padding('10px')
	);

	// Compact View
	fetch_directory(defaultdir)
		.then(([files, folders]) => {
		    files.forEach(file => {
		    	addListEntry(file, 'file')
		    });

		    folders.forEach(folder => {
		        addListEntry(folder, 'folder')
		    });
		}
	);
}

fetchDirectory(defaultdir)