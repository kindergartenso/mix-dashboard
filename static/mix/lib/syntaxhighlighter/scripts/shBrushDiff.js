define("mix/lib/syntaxhighlighter/scripts/shBrushDiff.js",function(e,i){!function(){function s(){this.regexList=[{regex:/^\+\+\+.*$/gm,css:"color2"},{regex:/^\-\-\-.*$/gm,css:"color2"},{regex:/^\s.*$/gm,css:"color1"},{regex:/^@@.*@@$/gm,css:"variable"},{regex:/^\+[^\+]{1}.*$/gm,css:"string"},{regex:/^\-[^\-]{1}.*$/gm,css:"comments"}]}"undefined"!=typeof e?SyntaxHighlighter=e("shCore").SyntaxHighlighter:null,s.prototype=new SyntaxHighlighter.Highlighter,s.aliases=["diff","patch"],SyntaxHighlighter.brushes.Diff=s,"undefined"!=typeof i?i.Brush=s:null}()});