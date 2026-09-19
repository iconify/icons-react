import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0omkob4z.css';
import '../../css/q/qx5t5kjwy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0omkob4z"/><path class="qx5t5kjwy"/>`,
		"fallback": "devicon:zsh-wordmark",
	});
}

export default Component;
