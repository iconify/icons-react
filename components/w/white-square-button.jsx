import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iknetdbmw.css';
import '../../css/u/umgeii-gz.css';
import '../../css/f/ffr77i4rv.css';
import '../../css/z/z6s47uthj.css';
import '../../css/s/scfhkubuq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iknetdbmw"/><path class="umgeii-gz"/><path class="ffr77i4rv"/><path class="z6s47uthj"/><path class="scfhkubuq"/>`,
		"fallback": "openmoji:white-square-button",
	});
}

export default Component;
