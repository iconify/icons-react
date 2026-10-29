import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jxr2syb4f.css';
import '../../css/u/uk6ap4bas.css';
import '../../css/o/okqejirib.css';
import '../../css/z/z414mqbvu.css';
import '../../css/u/u2l711bmk.css';
import '../../css/q/qftj53-6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jxr2syb4f wm-deco"/><path class="uk6ap4bas wm-deco"/><path class="okqejirib wm-deco"/><path class="wm-k z414mqbvu"/><path class="u2l711bmk wm-a"/><path class="qftj53-6n wm-k"/></g>`,
		"fallback": "withicons:webhook-blueprint",
	});
}

export default Component;
