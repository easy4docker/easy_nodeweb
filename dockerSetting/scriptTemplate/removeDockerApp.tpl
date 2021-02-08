# -- Remove docker app ... <%=@serverName %> ---

docker container stop <%=@siteContainer %> || true

docker container rm <%=@siteContainer %> || true

docker image rm -f <%=@siteImage %> || true
