import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxd2ugikm.css';
import '../../css/v/vhi06qdng.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zxd2ugikm"/><path class="vhi06qdng"/>`,
		"fallback": "qlementine-icons:zoom-horizontal-16",
	});
}

export default Component;
