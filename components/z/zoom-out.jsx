import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fh8rzobwg.css';
import '../../css/i/i0u2ubbtx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxa0n2cLp"><g class="v3_i3wktz"><path class="fh8rzobwg"/><path class="i0u2ubbtx"/></g></mask></defs><path mask="url(#SVGxa0n2cLp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:zoom-out",
	});
}

export default Component;
