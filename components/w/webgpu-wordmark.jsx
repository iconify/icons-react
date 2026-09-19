import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oftlmobpw.css';
import '../../css/a/aj9y6acmb.css';
import '../../css/b/br3smkx-y.css';
import '../../css/t/trga3dbka.css';
import '../../css/d/dvo9i08hu.css';
import '../../css/o/omcedhw0q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oftlmobpw"/><path class="aj9y6acmb"/><path class="br3smkx-y"/><path class="trga3dbka"/><path class="dvo9i08hu"/><path class="omcedhw0q"/>`,
		"fallback": "devicon:webgpu-wordmark",
	});
}

export default Component;
