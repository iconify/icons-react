import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2sp9xloz.css';
import '../../css/c/cg9on-ftx.css';
import '../../css/s/swaugsbnu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2sp9xloz"/><path class="cg9on-ftx"/><path class="swaugsbnu"/>`,
		"fallback": "qlementine-icons:wireless-2-16",
	});
}

export default Component;
