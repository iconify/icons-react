import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q30p7tbwg.css';
import '../../css/b/b4628owed.css';
import '../../css/f/fzgukmboj.css';
import '../../css/g/gahp4sboa.css';
import '../../css/t/tx072rjnb.css';

const viewBox = {"width":1200,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q30p7tbwg"/><g class="b4628owed"><path class="fzgukmboj"/><path class="gahp4sboa"/></g><path class="tx072rjnb"/>`,
		"fallback": "thesvg-color:webgl-light",
	});
}

export default Component;
