import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boq6ejbul.css';
import '../../css/z/zlg69lb0a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boq6ejbul"/><path class="zlg69lb0a"/>`,
		"fallback": "selfhst:zrok",
	});
}

export default Component;
