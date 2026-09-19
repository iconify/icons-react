import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2dwgg_xu.css';
import '../../css/y/yo-f7l1pt.css';
import '../../css/z/zvtktlzvi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2dwgg_xu"/><path class="yo-f7l1pt"/><path class="zvtktlzvi"/>`,
		"fallback": "fxemoji:zzz",
	});
}

export default Component;
