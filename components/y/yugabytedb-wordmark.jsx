import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef-yoed_f.css';
import '../../css/y/ymnh-3b0c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef-yoed_f"/><path class="ymnh-3b0c"/>`,
		"fallback": "devicon:yugabytedb-wordmark",
	});
}

export default Component;
