<h1>Challenge</h1>
<h2>The nth Smallest Integer</h2>

Given a list of integers, return the nth smallest integer in the list. Only distinct elements should be considered when calculating the answer. n will always be positive (n > 0)

If the nth small integer doesn't exist, return -1 (C++) / None (Python) / nil (Ruby).

Notes:

"indexing" starts from 1
huge lists (of 1 million elements) will be tested
Examples
```
small({1, 3, 4, 5}, 7)       -> null  // n is more than the size of the list
small({4, 3, 4, 5}, 4)       -> null  // 4th smallest integer doesn't exist
small({45, -10, 4, 5, 4}, 4) -> 45  // 4th smallest integer is 45
```