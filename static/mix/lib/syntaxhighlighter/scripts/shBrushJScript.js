define("mix/lib/syntaxhighlighter/scripts/shBrushJScript.js",function(e,t){!function(){function i(){var e="break case catch continue default delete do else false  for function if in instanceof new null return super switch this throw true try typeof var while with",t=SyntaxHighlighter.regexLib;this.regexList=[{regex:t.multiLineDoubleQuotedString,css:"string"},{regex:t.multiLineSingleQuotedString,css:"string"},{regex:t.singleLineCComments,css:"comments"},{regex:t.multiLineCComments,css:"comments"},{regex:/\s*#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(e),"gm"),css:"keyword"}],this.forHtmlScript(t.scriptScriptTags)}"undefined"!=typeof e?SyntaxHighlighter=e("mix/lib/syntaxhighlighter/shCore.js").SyntaxHighlighter:null,i.prototype=new SyntaxHighlighter.Highlighter,i.aliases=["js","jscript","javascript"],SyntaxHighlighter.brushes.JScript=i,"undefined"!=typeof t?t.Brush=i:null}()});