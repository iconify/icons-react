import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/awoqex7gd.css';
import '../../css/j/jpajjdo8n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiSszmc2E"><g class="s9cl3zbei"><path class="awoqex7gd"/><path class="jpajjdo8n"/></g></mask></defs><path mask="url(#SVGiSszmc2E)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:youtobe",
	});
}

export default Component;
