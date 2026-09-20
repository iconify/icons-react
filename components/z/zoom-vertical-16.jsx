import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsqbu6bax.css';
import '../../css/b/b5tasac6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsqbu6bax"/><path clip-rule="evenodd" class="b5tasac6f"/>`,
		"fallback": "qlementine-icons:zoom-vertical-16",
	});
}

export default Component;
