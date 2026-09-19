import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btx30rb9t.css';
import '../../css/l/li4b_wx_f.css';
import '../../css/y/yn221v8dj.css';
import '../../css/r/rdtgsqklo.css';
import '../../css/p/p5pfambtc.css';
import '../../css/f/f-2ktvb6x.css';
import '../../css/t/tnqkjxb-y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="btx30rb9t"><path class="li4b_wx_f"/><path class="yn221v8dj"/><path class="rdtgsqklo"/><path class="p5pfambtc"/><path class="f-2ktvb6x"/><path class="tnqkjxb-y"/></g>`,
		"fallback": "icon-park:weightlifting",
	});
}

export default Component;
