import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqu9abbwj.css';
import '../../css/m/m1t94ydqt.css';
import '../../css/a/auiy-wsxq.css';
import '../../css/y/yevfxzbxn.css';
import '../../css/i/i9rlg9tan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="oqu9abbwj"/><circle class="m1t94ydqt"/><circle class="auiy-wsxq"/><path class="yevfxzbxn"/><path class="i9rlg9tan"/>`,
		"fallback": "gcp:web-security-scanner",
	});
}

export default Component;
