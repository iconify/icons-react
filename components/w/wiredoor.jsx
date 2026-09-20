import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-nw6ib4c.css';
import '../../css/j/jhm78ac2w.css';
import '../../css/x/x3eii3bcc.css';
import '../../css/p/p57ym5jqk.css';
import '../../css/b/b_am57b9v.css';
import '../../css/q/qzsfgub2u.css';
import '../../css/v/v28pnmb_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-nw6ib4c"/><path class="jhm78ac2w"/><path class="x3eii3bcc"/><path class="p57ym5jqk"/><path class="b_am57b9v"/><path class="qzsfgub2u"/><path class="v28pnmb_m"/>`,
		"fallback": "selfhst:wiredoor",
	});
}

export default Component;
