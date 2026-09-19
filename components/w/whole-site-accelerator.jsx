import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/ozgrq5b1r.css';
import '../../css/l/l7avsacre.css';
import '../../css/q/qfez7pbdx.css';
import '../../css/b/bbx74dvkh.css';
import '../../css/f/f08pkdblx.css';
import '../../css/v/vdhgeqfxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="ozgrq5b1r"/><circle class="l7avsacre"/><circle class="qfez7pbdx"/><circle class="bbx74dvkh"/><path class="f08pkdblx"/><path class="vdhgeqfxw"/></g>`,
		"fallback": "icon-park-solid:whole-site-accelerator",
	});
}

export default Component;
