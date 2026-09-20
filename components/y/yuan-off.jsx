import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9gst35sp.css';
import '../../css/k/kfm7curke.css';
import '../../css/j/j96uhbcif.css';
import '../../css/n/n3yxckbfl.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r9gst35sp"/><path clip-rule="evenodd" class="kfm7curke"/><path clip-rule="evenodd" class="j96uhbcif"/><path clip-rule="evenodd" class="n3yxckbfl"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:yuan-off",
	});
}

export default Component;
