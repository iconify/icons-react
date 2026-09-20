import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-k31ybhz.css';
import '../../css/g/gwyi7htio.css';
import '../../css/k/k--jiub0l.css';
import '../../css/a/ao5nqfbtl.css';
import '../../css/z/zrdfgn_lh.css';
import '../../css/o/o94_7eb-t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p-k31ybhz"/><path class="gwyi7htio"/><path class="k--jiub0l"/><path class="ao5nqfbtl"/><path class="zrdfgn_lh"/><path class="o94_7eb-t"/></g>`,
		"fallback": "streamline-flex-color:webcam",
	});
}

export default Component;
