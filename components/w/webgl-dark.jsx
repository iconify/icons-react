import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdpfzv4oy.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/fzgukmboj.css';
import '../../css/g/gahp4sboa.css';
import '../../css/o/ofh7aqbnk.css';

const viewBox = {"width":1200,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdpfzv4oy"/><g class="n1mjunbsu"><path class="fzgukmboj"/><path class="gahp4sboa"/></g><path class="ofh7aqbnk"/>`,
		"fallback": "thesvg-color:webgl-dark",
	});
}

export default Component;
