import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/v/v_02abb1o.css';
import '../../css/t/twg4s5urk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGo6IM2cJW"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="v_02abb1o"/><circle class="twg4s5urk"/></g></mask></defs><path mask="url(#SVGo6IM2cJW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:winking-face-with-open-eyes",
	});
}

export default Component;
