#System Information

<!--Os info -->
##OS info
```
lsb_release -a 2>/dev/null
(cat /proc/version || uname -a ) 2>/dev/null
```

<!--PATH -->
##PATH
Check PATH you might want to hijack some libraries or binaries
```
echo $PATH
```

##Enviroment information
```
(env || set) 2>/dev/null
```
- `env` prints the name-value pairs like `printenv`. 
  This command also only prints variables with global scope.
  However, it cannot be used to print specific values of environment variables.
  
- `set` prints the shell variables, env variables, and shell variables.
These include in both local and global scopes.
  
##Kernel exploits
Check the kernel version.
```
cat /proc/version
uname -a
searchsploit "Linux Kernel Version"
```
**Dirty Cow - CVE-2016-1995.**

Race condition in mm/gup.c in the Linux kernel 2.x through 4.x before 4.8.3 allows local users to gain privileges by leveraging incorrect handling of a copy-on-write (COW) feature to write to a read-only memory mapping, as exploited in the wild in October 2016, aka "Dirty COW."
```
echo 0 > /proc/sys/vm/dirty_writeback_centisecs
g++ -Wall -pedantic -O2 -std=c++11 -pthread -o dcow 40847.cpp -lutil
https://github.com/dirtycow/dirtycow.github.io/wiki/PoCs
https://github.com/evait-security/ClickNRoot/blob/master/1/exploit.c
```

