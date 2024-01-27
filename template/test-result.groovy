GENERAL INFO

BUILD ${build.result ?: 'SUCCESSFUL'}
Build URL: ${rooturl}${build.url}
Project: ${project.name}
Date of build: ${it.timestampString}
Build duration: ${build.durationString}

<%
def changeSets = build.changeSets
if(changeSets != null) {
  def hadChanges = false %>
CHANGE SET
<% 	changeSets.each() { cs_list ->
      cs_list.each() { cs ->
     hadChanges = true %>
  	 Revision <%= cs.metaClass.hasProperty('commitId') ? cs.commitId : cs.metaClass.hasProperty('revision') ? cs.revision :
        cs.metaClass.hasProperty('changeNumber') ? cs.changeNumber : "" %> by <%= cs.author %>: (<%= cs.msgAnnotated %>)
<%	 cs.affectedFiles.each() { p -> %>
	 change: <%= p.editType.name %> <%= p.path %>
<%     }
     }
   }
  if(!hadChanges) { %>
  No changes
<% }
} %>

<%
try {
   def aggregationAction = it.getAction("io.jenkins.plugins.analysis.core.model.AggregationAction")
   if ( aggregationAction != null ) { %>
${aggregationAction.getDisplayName().toUpperCase()}
      <% aggregationAction.getTools().each {
        tool -> %>
Tool: ${tool.getName()}
Report: ${tool.getLatestUrl()}
Low: ${tool.getLowSize()}, Normal: ${tool.getNormalSize()}, High: ${tool.getHighSize()}, Error: ${tool.getErrorSize()}
<% 	}
   }
  } catch(e) {
    // we don't do anything
  } %>

<% if(build.result==hudson.model.Result.FAILURE) { %>
CONSOLE OUTPUT
<% 	build.getLog(100).each() { line -> %>
	${line}
<% 	}
   } %>