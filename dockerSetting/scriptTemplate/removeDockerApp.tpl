# -- Remove docker app ... <%=@serverName %> ---

docker container stop <%=@siteContainer %> > /dev/null 2>&1

docker container rm <%=@siteContainer %> > /dev/null 2>&1

docker image rm -f <%=@siteImage %> > /dev/null 2>&1
