A deliberately simple way to invent ndes on the fly in order to refer to them 
via entityreference.

Just type a title into an entityreference autocomplete field, and if no match is
found, a placeholder of that name will be created silently, instead of 
complaining.

Compare with 
* references_dialog.module
RECOMMENDED. You can use this as well to create referred nodes on the fly.
The only reason it's not the entire solution is because you have to choose 
to do so each time.
Use references_dialog AS WELL AS this module for the best mix.


* autocreate.module
DO NOT USE. Not sure what happened with the D7 branch, but it decided to make 
its own field type instead of building on entityreference. Incompatible.
However, it did have the innovation of declaring a 'template' not to be used 
when autocreating a target. Good idea. UI is weird though. Cannot use.

* noderefcreate.module
Runner-up to references_dialog. However only supports nodereference at this 
time.

* entityconnect.module
A contender for generic reference create and edit. May work.
However button layouts it added to the UI were inconsistent under vertical tabs.
Caused visits to new form pages when creating new items. 
This was the main reason references_dialog won.
