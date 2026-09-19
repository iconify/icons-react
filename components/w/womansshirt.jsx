import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv1k-567q.css';
import '../../css/v/vc6_trz7f.css';
import '../../css/x/xwykv3bha.css';
import '../../css/u/ug1iwydvf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv1k-567q"/><path class="vc6_trz7f"/><path class="xwykv3bha"/><path class="ug1iwydvf"/>`,
		"fallback": "fxemoji:womansshirt",
	});
}

export default Component;
