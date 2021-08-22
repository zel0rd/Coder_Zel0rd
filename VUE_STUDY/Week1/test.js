

let trDom = el("tr");
let no = el("td");
let cid = el("td");
let img = el("td");
let name = el("td");
let sdate = el("td");
let edate = el("td");
let vmmap = el("td");
<td>title</td>
            <td>content</td>
            <td>createdAt</td>
            <td>like</td>
            <td>dislike</td>
            <td>author</td>

no.append(i);
cid.append(v.cid);
img.append(v.img);
// name.append(v.name)
name.innerHTML = `<a href='/admin/class/modify/${v.cid}'>${v.name}</a>`;
sdate.append(v.sdate);
edate.append(v.sdate);
vmmap.append(v.vmmap);

trDom.append(no, cid, img, name, sdate, edate, vmmap);
classlistCell.append(trDom);

<a href="javascript:void(0);" onclick="callFunction();">onclick function</a>

출처: https://thingsthis.tistory.com/130 [여행과 일상]