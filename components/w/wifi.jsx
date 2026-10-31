import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/w/wf_md0bhy.css';
import '../../css/i/i5nlfc1po.css';
import '../../css/s/slgbqz4nj.css';
import '../../css/j/jtjwabcob.css';
import '../../css/q/qihwn8b-w.css';
import '../../css/e/ejpwal01x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyH7SIhbq" x1="10" x2="14" y1="4.77" y2="20.37" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wf_md0bhy wm-k"/><path class="i5nlfc1po wm-deco"/><path fill="url(#SVGyH7SIhbq)" class="slgbqz4nj wm-k"/><path class="jtjwabcob wm-shadow"/><path class="qihwn8b-w wm-shine"/><path class="ejpwal01x wm-shine"/></g>`,
		"fallback": "withicons-valentine:wifi",
	});
}

export default Component;
