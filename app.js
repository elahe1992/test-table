(function() {

	var tbodyRef = document.getElementById('user-table').getElementsByTagName('tbody')[0];
	var comboRef = document.getElementById('user-combo');
	let rawUsers = [];

	function renderCombo(users) {
		for (let index = 0; index < users.length; index++) {
			const userInfo = users[index];


			// Combo
			var opt = document.createElement('option');
			opt.value = userInfo.id;
			opt.innerHTML = userInfo.name;
			comboRef.appendChild(opt);
		}
	}

	function renderTable(users) {

		while (tbodyRef.firstChild) {
        	tbodyRef.removeChild(tbodyRef.firstChild);
    	}

		for (let index = 0; index < users.length; index++) {
			const userInfo = users[index];


			// Insert a row at the end of table
			var newRow = tbodyRef.insertRow();

			// id
			var newCell = newRow.insertCell();
			var newText = document.createTextNode(userInfo.id);
			newCell.appendChild(newText);

			// name
			var newCell = newRow.insertCell();
			var newText = document.createTextNode(userInfo.name);
			newCell.appendChild(newText);
			
			// username
			var newCell = newRow.insertCell();
			var newText = document.createTextNode(userInfo.username);
			newCell.appendChild(newText);
			
			// email
			var newCell = newRow.insertCell();
			var newText = document.createTextNode(userInfo.email);
			newCell.appendChild(newText);
			
			// address
			var newCell = newRow.insertCell();
			var newText = document.createTextNode(userInfo.email);
			newCell.appendChild(newText);
		}
	}

   	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => {
		
		rawUsers = users;

		renderCombo(users);
		renderTable(users);
	}
		

	)

	comboRef.addEventListener('change', function() {
		let users = rawUsers.filter(item => item.id == this.value)
		renderTable(users)
	});
})();