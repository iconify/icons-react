import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fqzg-n1xw.css';
import '../../css/w/wekuv1b2d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0V93Schu"><g class="v3_i3wktz"><path class="fqzg-n1xw"/><path class="wekuv1b2d"/></g></mask></defs><path mask="url(#SVG0V93Schu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:zoom-internal",
	});
}

export default Component;
