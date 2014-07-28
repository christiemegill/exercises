var port = process.env.PORT || 3000;
app.listen(port);
console.log("Started server on port " + port );

function LinkedList() {
	this.head = new Node ("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
}

function find(item) {
	var currNode = this.head;
	while (currNode.element != item {
		currNode = currNode.next;
	}
	return currNode
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}

function display() {
	var currNode = this.head;
	while (!(currNode.next == null)) {
		print(currNode.next.element);
		currNode = currNode.next;
	}
}

var foodCravings = new LinkedList();
foodCravings.insert("pizza", "head");
foodCravings.insert("truffles", "pizza");
foodCravings.insert ("cottage cheese", "truffles");
foodCravings.insert ("green drink", "cottage cheese");
foodCravings.display 
