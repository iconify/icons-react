import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/f/fyuscaboy.css';
import '../../css/b/b4jtc2s1i.css';
import '../../css/x/xj-iu9b1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="fyuscaboy"/><path class="b4jtc2s1i"/><circle class="xj-iu9b1e"/></g>`,
		"fallback": "icon-park:winking-face-with-open-eyes",
	});
}

export default Component;
