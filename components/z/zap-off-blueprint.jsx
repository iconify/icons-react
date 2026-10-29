import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jp9fg595t.css';
import '../../css/o/ofsvud-pe.css';
import '../../css/l/l3e3j8bfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jp9fg595t wm-deco"/><path class="ofsvud-pe wm-k"/><path class="l3e3j8bfu wm-s"/></g>`,
		"fallback": "withicons:zap-off-blueprint",
	});
}

export default Component;
