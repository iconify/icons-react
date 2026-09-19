import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enq8bzvvs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRJXwnbaw"><path clip-rule="evenodd" class="enq8bzvvs"/></mask></defs><path mask="url(#SVGRJXwnbaw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:windmill",
	});
}

export default Component;
