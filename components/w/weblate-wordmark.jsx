import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm0hikb7f.css';
import '../../css/f/fc2_4nl4g.css';
import '../../css/v/vczsbmbgz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm0hikb7f"/><path clip-rule="evenodd" class="fc2_4nl4g"/><path class="vczsbmbgz"/>`,
		"fallback": "devicon-plain:weblate-wordmark",
	});
}

export default Component;
