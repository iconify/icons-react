import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nf88nbcws.css';
import '../../css/b/b0px3ts2v.css';
import '../../css/f/f_b-p1bjq.css';
import '../../css/i/i6ruy398b.css';
import '../../css/h/hk9i6mk5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nf88nbcws"/><path class="b0px3ts2v"/><path class="f_b-p1bjq"/><path class="i6ruy398b"/><path class="hk9i6mk5d"/></g>`,
		"fallback": "streamline-ultimate-color:zoom-out-page",
	});
}

export default Component;
