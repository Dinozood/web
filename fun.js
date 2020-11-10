//window.onload = onload_frst();

function get_imgs_count() {
    let img_block = document.getElementsByClassName("col text-center");
    imgs = img_block[0].childNodes;
    imgs = imgs[1];
    return imgs.childElementCount.toString();
}

function get_first_img_width() {
    let imsg_block = document.getElementsByClassName("col text-center"),
        imgs = imsg_block[0].childNodes,
        img = imgs[1].children[0];
    return img.width.toString()+ "px" + " or " + window.getComputedStyle(img).width;
}

function get_widest_wide() {
    let imsg_block = document.getElementsByClassName("col text-center"),
        imgs = imsg_block[0].childNodes,
        widest_width_absolute = 0,
        widest_width_computed = 0,
        computed = "";
    for (let i = 0; i <= imgs.length; ++i) {
        img = imgs[1].children[i];
        computed = window.getComputedStyle(img).width;
        computed = Number(computed.substring(0, computed.indexOf("px")));
        if (img.width > widest_width_absolute)
            widest_width_absolute = img.width;
        if (computed > widest_width_computed)
            widest_width_computed = computed;
    }

    return widest_width_absolute.toString() + "px" + " or " + widest_width_computed + "px";

}

function get_total_height() {
    let imsg_block = document.getElementsByClassName("col text-center"),
        imgs = imsg_block[0].childNodes,
        total_height_absolute = 0,
        total_height_computed = 0,
        computed = "";
    for (let i = 0; i <= imgs.length; ++i) {
        img = imgs[1].children[i];
        computed = window.getComputedStyle(img).height;
        computed = Number(computed.substring(0, computed.indexOf("px")));
        total_height_absolute += img.naturalHeight;
        total_height_computed += computed;
    }

    return total_height_absolute.toString() + "px" + " or " + total_height_computed + "px";
}

function onclick_frst(){
    console.log('1');
    var body = document.getElementsByTagName("body");
    document.write("Some_text");
}

function onload_frst(){
    document.write("<div>");
    document.write("Hello World!");
    document.write("</div>");
}

$(document).ready(function() {
   var frst = document.getElementById("Frst");
   var words = 0,
       text = frst.innerText;
   for (let i = 0; i < frst.innerText.length; ++i) {
       if (text[i] == ' ')
           ++words;
   }
   ++words;

   frst.innerText += "\n" + " Sum of words is " + words.toString() +
       "\n Sum of chars is " + text.length.toString() +
       "\n" + window.location.href + "\n";
   var url = new URL (window.location.href), pathname = '', dot = 0;

   frst.innerText += "*" + url.protocol + "*//";
   frst.innerText += url.username + url.password + url.host;
    if (url.pathname != '') {
        pathname = url.pathname;
        for (let i = pathname.length; i != 0; --i) {
            if (pathname[i] == '.') {
                dot = i;
                break;
            }
        }
   }
    frst.innerText += "!" + pathname.substring(0, dot) +  "!" + "+" + pathname.substring(dot) + "+" +
    "^" + url.search + "^\n";
    var str = url.href, map = new Map();
    if(str.indexOf('?')!=-1)
    {
        var ary = str.split('?')[1].split('&');
        for(let i = 0; i <= ary.length-1; i++)
        {
            var oper = ary[i].split("=")[0],
                val = ary[i].split('=')[1];
            map.set(oper, val);
        }
    }

    table = document.createElement("table");
    table.className = "table";
    table.id = "Frst_table";
    thead = document.createElement("thead");
    thead.className = "thead-dark";
    tr = document.createElement('tr');

    th = document.createElement('th');
    th.scope = "col";
    th.appendChild(document.createTextNode("#"));
    tr.appendChild(th);

    th = document.createElement('th');
    th.scope = "col";
    th.appendChild(document.createTextNode("Parameter"));
    tr.appendChild(th);

    th = document.createElement('th');
    th.scope = "col";
    th.appendChild(document.createTextNode("Value"));
    tr.appendChild(th);

    thead.appendChild(tr);
    table.appendChild(thead);

    tbody = document.createElement("tbody");
    let k = 0;
    map.forEach(function(value,key) {
        ++k;

        tr = document.createElement("tr");
        th = document.createElement("th");
        th.scope = "row";
        th.appendChild(document.createTextNode(k));

        td = document.createElement("td");
        td.appendChild(document.createTextNode(key.toString()));
        tr.appendChild(th);

        tr.appendChild(td);

        td = document.createElement("td");
        td.appendChild(document.createTextNode(value.toString()));
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    document.getElementById("Frst").appendChild(table);

});

function loaded_scd() {
    //Scd pard
    //params

    scd = document.getElementById("Scd");
    container = document.createElement("div");
    container.className = "container nav-fill flex-column";
    row = document.createElement("div");
    row.className = "row";

    col = document.createElement("div");
    col.className = "col";

    ul = document.createElement("ul");
    ul.className = "nav justify-content-center";

    ul_name = document.createElement("ul");
    ul_name.className = "nav flex-column";

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode("Anchors number is"));
    ul_name.appendChild(li);

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode("Links number is"));
    ul_name.appendChild(li);

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode("First anchonr's innerHTML"));
    ul_name.appendChild(li);

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode("imgs num is"));
    ul_name.appendChild(li);

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode("First img's width is"));
    ul_name.appendChild(li);

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode("The most wider width is"));
    ul_name.appendChild(li);

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode("Height of all pictures is"));
    ul_name.appendChild(li);

    ul.appendChild(ul_name);
    col.appendChild(ul);
    row.appendChild(col);

    //values
    col = document.createElement("div");
    col.className = "col";

    ul = document.createElement("ul");
    ul.className = "nav justify-content-center";

    ul_name = document.createElement("ul");
    ul_name.className = "nav flex-column";

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode(
        document.getElementById('anchors').getElementsByTagName("li").length.toString()));
    ul_name.appendChild(li);

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode(
        document.getElementById('links').getElementsByTagName("li").length.toString()));
    ul_name.appendChild(li);

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode(
        document.getElementsByClassName('badge badge-primary')[0].innerHTML));
    ul_name.appendChild(li);

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode(get_imgs_count()));
    ul_name.appendChild(li);

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode(get_first_img_width()));
    ul_name.appendChild(li);

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode(get_widest_wide()));
    ul_name.appendChild(li);

    li = document.createElement("li");
    li.className = "nav-item";
    li.appendChild(document.createTextNode(get_total_height()));
    ul_name.appendChild(li);


    ul.appendChild(ul_name);
    col.appendChild(ul);
    row.appendChild(col);

    container.appendChild(row);
    scd.appendChild(container);
}

function onclick_thrd() {
    block = document.getElementById("Thrd").getElementsByTagName("form");
    main = document.getElementById("Thrd");

    div = document.createElement("div");
    div.className = "nav justify-content-center";

    for (let i = 0; i < block.length; ++i) {
        if (i%2==0 && i<8)
            div.innerText+=block[i].getAttribute("name").toString() + ", ";
        else if (i%2 == 0)
            div.innerText+=block[i].getAttribute("name").toString();
    }


    main.appendChild(div);
}

function show_name() {
    $().alert()
}
function button_onclick() {

}


$('#myPopover').onclick(popover({
    animation: true,
    content: "Hell",
    placement: 'right',
})
)
