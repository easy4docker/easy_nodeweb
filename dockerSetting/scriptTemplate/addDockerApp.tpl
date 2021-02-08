# -- Add docker app ... <%=@serverName %> --

cd <%=@dockerSettingPath %>

docker build -f <%=@dockerFile %> -t <%=@siteImage %> .

docker container stop <%=@siteContainer %> > /dev/null 2>&1

docker container rm <%=@siteContainer %> > /dev/null 2>&1

docker run -d <%=@cmdPorts  %> -v "<%=@dockerCodePath%>":/var/_localApp -v "<%=@dockerDataPath%>":/var/_localAppData -v "<%=@dockerEnvPath%>":/var/_localAppEnv --network network_easydocker --name <%=@siteContainer %>  <%=@siteImage %>
