echo "Remove docker app ... <%=@serverName %>"

docker container stop <%=@siteContainer %> || true

docker container rm <%=@siteContainer %> || true
