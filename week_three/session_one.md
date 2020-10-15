#### 10/14/2020 Lecture

## Group Projects - Git Overview on Branching and Merging
    - Project owner: create initial repo (standard steps) and push repo to github
        Set other members as contributors on Github
    - Other project members: accept invite, copy the repo down to your computer (git clone <repo link>)
    - ALL MEMBERS: create branches with your own name so you know who is doing what
        git checkout -b my_name_here
        the "-b" part makes a new "branch" (an independent line of development)
        make changes based on your line of work (front-end, back-end, styling, etc)
        Now when you push, you will run "git push origin my_name_here"
        Note that this makes NEW BRANCHES over on github!
    - Project owner: Pull and Merge on Github so everyone's content gets combined on the remote master branch
        select "compare and pull request"
        if branch is designated as "able to merge" -> choose "create pull request", then "merge pull request" and "confirm merge"
        if conflicts -> utilize github to choose which parts of each branch to keep, then merge
    - Post remote merge: individual contributors need to update their local master branches
        git checkout master
        git pull origin master (update your master branch with the new changes in the remote repo)
        git checkout my_name_here to return to local branch
        git merge master -> make your local branch match the master repo (or alternatively delete old branch make a new one)


## Intro to Recursion
    - Calling functions in functions
        We're able to call functions while inside of a function
        the inside function goes on top of the "call stack" and completes whatever it does before the outside function can complete
    - What is Recursion?
        The process in which a function calls itself directly or indirectly -> we call the function inside of itself
        Functionally this is an alternative way of looping or repeating tasks, but has the added bonus of letting us bring data as we loop
        via parameters
        Must have some sort of "end condition" or else it will call itself indefinitely, similar to a while loop (aka stack overflow)
    - Ex: Let's write a function that says a statement "n" number of times
        How does this look as a for loop?
        How does this look as a while loop?
        Write as a recursive function
            - T diagram
            - Coding
    - rSigma
    - rFactorial