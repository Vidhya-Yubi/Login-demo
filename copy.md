Reference links:


Install home-brew, rbenv and change ruby version using rvm 

https://www.youtube.com/watch?v=-DJz7yC3iOI 

GIT:

git branch 
git fetch
git checkout master
git checkout features/feature-new-maker-checker-master-merge 


git checkout -b new_branch_name
11:53
Creating a PR request - PULL REQUEST --> move to master.. git pull.. git checkout -b branch_name.. git status.. git add file_path.. git commit -m ""... git push .. share the branch name..

Async JS - tamil video

https://www.youtube.com/watch?v=NppOoTrMo70

Below is the plan:

Week 1: Ruby, Rails Boot camp
Week 2: React Boot camp and start with sample project
Week 3:  Training project and review
Week 4: Pool product walkthrough by Product team/ QA Team 
@Harish
 will help sharing the materials and plan for the training.
Week 5: Code walk through by the mentors and others. There will be some QA tasks assigned as well to get comfortable with the product flow.
Week 6: Start working on minor changes

@vidhya.anandha
: Please get in touch with 
@aashrya.pandya
 and get help on any access, training needed.
@aashrya.pandya
: Lets make sure we are following the above plan and share the weekly progress update. Thanks.


Shalini onboarding doc.. for rails installation

https://docs.google.com/document/d/1hA7RXm8t4SDmbK5oD4RN4vV0WLhGx9pWCI6RL8NSa4E/edit

from Jyoti - Create the personal access token in GIT after getting access to the git.  Follow the instructions from https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token.

Gaja study material - git + rails+ DB https://gorails.com/setup/macos/12-monterey

https://goyubi.atlassian.net/wiki/spaces/YP/pages/55640696/Pools+Product+Details

You can get access to "confluence" from it.support team
 https://goyubi.atlassian.net/wiki/spaces/a/pages/73793638/Developer+Onboarding - Developer onboarding materials.

vim . zshrc
2:29
if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi
if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi

REACT JS - Dave Gray in youtube
Wednesday, March 1st

Rails - Active Record basics

https://www.youtube.com/watch?v=md7bnEcRAi
9:54

Associations - Rails - https://www.youtube.com/watch?v=Ym6j82fKZgA


https://github.com/gaja-git/HeroViredJobPortal-Private 
1. Dir["#{Rails.root}/app/models/concerns/constants/*.rb"].each { |f| require f }.   This code is a Ruby code snippet that uses the Dir class to get a list of files that match a specified pattern (all .rb files) in the directory #{Rails.root}/app/models/concerns/constants/. The #{Rails.root} is a Ruby on Rails convention that evaluates to the root directory of the Rails application.
The each method is then called on the resulting list of files, and the require method is called on each file to load it into memory. This code is typically used in Rails applications to load constants defined in files located in the specified directory, making them available to the application at runtime.
In summary, this code dynamically requires all Ruby files located in the constants subdirectory of the concerns directory under app/models in a Ruby on Rails application.

CONCERNS:
there are several areas where concerns can be useful:
1. Code reuse: Concerns allow you to extract common code from your models, controllers, or other components and share it across different parts of your application. This can help reduce duplication and make your code more maintainable.
2. Modularity: By using concerns, you can break down your application into smaller, more manageable modules, which can be easier to understand and modify. This can also help with collaboration, as different developers can work on different parts of the application without stepping on each other's toes.
3. Organization: Concerns can also help you keep your code organized and structured, which can make it easier to navigate and understand.
To use concerns in Rails, you can create a module with the shared code and include it in your models or controllers using the include method. For example:
# app/controllers/concerns/searchable.rb

module Searchable
  def search(query)
    # ...
  end
end

# app/controllers/posts_controller.rb

class PostsController < ApplicationController
  include Searchable
  
  def index
    @posts = Post.search(params[:q])
  end
end
In this example, the Searchable module defines a search method that can be used to search for posts. By including this module in the PostsController, the search method becomes available in the controller's actions.

2.class Transaction
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::EmbeddedErrors
  include Mongoid::Search
  include Constants::Transaction
  include ModelIdentity
  include Publishable
  include Filterable
  include TransactionStatistics
  include Transactions::Dashboard
  publishable
This is a Ruby on Rails code that defines a class named Transaction. The class includes several modules using the include keyword, which are used to add functionality to the class. Here's what each module does:
* Mongoid::Document: This is a module provided by the mongoid gem that adds MongoDB document support to the class. This allows the class to be saved and retrieved from a MongoDB database.
* Mongoid::Timestamps: This is another module provided by the mongoid gem that adds created_at and updated_at timestamps to the class. These timestamps are automatically updated when the document is created or updated.
* Mongoid::EmbeddedErrors: This module provides a way to handle validation errors for embedded documents in MongoDB.
* Mongoid::Search: This module adds full-text search capabilities to the class using MongoDB's built-in text search functionality.
* Constants::Transaction: This is a module defined in the app/models/concerns/constants/transaction.rb file that includes constants related to transactions.
* ModelIdentity: This is a module defined in the app/models/concerns/model_identity.rb file that adds a UUID-based ID to the class.
* Publishable: This is a module defined in the app/models/concerns/publishable.rb file that adds functionality to publish and unpublish the document.
* Filterable: This is a module defined in the app/models/concerns/filterable.rb file that adds support for filtering the document.
* TransactionStatistics: This is a module defined in the app/models/concerns/transaction_statistics.rb file that adds methods to calculate various statistics related to transactions.
* Transactions::Dashboard: This is a module defined in the app/models/concerns/transactions/dashboard.rb file that adds dashboard-related methods to the class.
Finally, the publishable method is called, which is likely a custom method defined somewhere in the codebase that further modifies the behavior of the class related to publishing. 

3.attr_accessor :skip_oms_callbacks
  cattr_accessor :transaction_types
attr_accessor and cattr_accessor are Ruby methods used to define getter and setter methods for instance and class variables, respectively.
In the code snippet, attr_accessor is used to define an instance variable skip_oms_callbacks. This creates a getter and setter method for the variable, allowing the value to be read and updated from outside the class.
cattr_accessor is used to define a class variable transaction_types. This creates a getter and setter method for the class variable, allowing the value to be read and updated from anywhere in the codebase. The c in cattr_accessor stands for class, which distinguishes it from attr_accessor used for instance variables.
In summary, these lines of code create two accessor methods in the class: skip_oms_callbacks to access the instance variable @skip_oms_callbacks, and transaction_types to access the class variable @@transaction_types.

What is the difference between class variables and class instance variables? The main difference is the behavior concerning inheritance: class variables are shared between a class and all its subclasses, while class instance variables only belong to one specific class.
 

