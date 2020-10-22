class binaryNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    add(value){
        //check if the root is empty
        if(this.root == null){
            this.root = new binaryNode(value);
            return this;
        }
        var climber = this.root;
        while(climber != null){
            //check if the value is less than our current position
            if(value < climber.value){
                //is the space it would move to empty?
                if(climber.left == null){
                    climber.left = new binaryNode(value);
                    return this;
                }
                //if the space is full, move down the tree to the left and try again
                climber = climber.left;
            }
            //if the value is greater than or equal to our current position
            else{
                //is the space it would move empty?
                if(climber.right == null){
                    climber.right = new binaryNode(value);
                    return this;
                }
                //if the space is full, move down the tree to the right and try again
                climber = climber.right;
            }
        }
    }
    contains(value){
        var climber = this.root;
        while(climber != null){
            if(value == climber.value){
                return true;
            }
            else if(value < climber.value){
                climber = climber.left;
            }
            else{
                climber = climber.right;
            }
        }
        return false;
    }
    size(){
        //if the tree is empty, size is 0
        if(this.root == null){
            return 0;
        }
        //make a helper function to loop through the tree
        function helper(climber){
            //if the current position in the tree is null, return 0
            if(climber == null){
                return 0;
            }
            //return 1 (for the position we are in) + whatever is inside its left track + whatever is inside its right track
            return 1 + helper(climber.left) + helper(climber.right);
        }
        return helper(this.root);
    }
}

var myTree = new BST();
myTree.add(25).add(8).add(12).add(40).add(19);
console.log(myTree)
console.log(myTree.contains(12))
console.log(myTree.contains(30))
console.log(myTree.size())