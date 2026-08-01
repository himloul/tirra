document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("blockquote").forEach(function (bq) {
    var p = bq.querySelector("p");
    if (!p) return;
    var m = p.textContent.match(/^\[!([a-z0-9-]+)\s*([^\]]*)\]([\s\S]*)$/i);
    if (!m) return;
    var type = m[1].toLowerCase();
    var title = m[2].trim();
    var label = document.createElement("div");
    label.className = "callout-title";
    label.textContent = title || type.charAt(0).toUpperCase() + type.slice(1);
    bq.insertBefore(label, p);
    bq.classList.add("callout");
    bq.classList.add("callout-" + type);
    if (m[3].trim()) {
      var first = document.createTreeWalker(p, NodeFilter.SHOW_TEXT).nextNode();
      if (first) first.textContent = first.textContent.replace(/^\[!([a-z0-9-]+)\s*([^\]]*)\]/i, "");
    } else {
      p.remove();
    }
  });
});
