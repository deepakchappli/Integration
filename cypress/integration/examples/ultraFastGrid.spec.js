describe("AppTest", () => {

    it(`ultraFastTest`, function () {
    try {
       // cy.visit('https://shop.countdown.co.nz/');
        //cy.visit('https://www.catch.com.au/shop/clearance/?p=5')
         cy.visit('https://www.catch.com.au/onepass');
        //cy.config('pageLoadTimeout', 100000)

        //cy.pause();



        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Catch ',
            testName: 'Catch Github',
        })

        //cy.viewport('iPhone XR');
        cy.pause();
        cy.eyesCheckWindow({
            waitBeforeCapture: 4000,
            tag: "One Pass Page",
            target: 'window',
            fully: true,
            ignoreDisplacements: true
        });

            // Using a css selector
            cy.eyesCheckWindow({
              target: 'region',
              ignoreDisplacements: true,
              selector: {
                type: 'css',
                selector: 'body > footer' // or '//button'
              }
            });


            cy.visit('https://www.catch.com.au/dyson');
            cy.pause();
            //cy.scrollTo('bottom')
            cy.eyesCheckWindow({
                        waitBeforeCapture: 7000,
                        tag: "Clearance page",
                        target: 'window',
                        matchLevel: 'Layout',
                        fully: true,
                        ignoreDisplacements: true
                    });



        //Rent page
        /*cy.get('[data-testid=rent-navigation]').click();
        cy.get('.css-1qwp7ve > .css-1x2sqxd').scrollIntoView();

        // Check the app page
         cy.wait(7000);
        *//**//*cy.eyesCheckWindow({
            tag: "Rent page",
            target: 'window',
            fully: true,
            ignoreDisplacements: true

        });*//**//*
        cy.pause();

        cy.eyesCheckWindow({
          tag: "Rent Page",
          target: 'region',
          selector: {
            type: 'xpath',
            selector: '/[@id="__domain_group/APP_ROOT"]/div[3]/div/div' // or '//button'
          }
        });

        cy.visit("https://www.domain.com.au/292-cotham-road-kew-vic-3101-2017294759");

        cy.get('[data-testid=listing-details__description-button]').click();

        cy.pause();

        cy.wait(10000);
                cy.eyesCheckWindow({
                    tag: "Property Page",
                    target: 'window',
                    fully: true,
                    ignoreDisplacements: true
                });


        //Login page
        cy.get('.css-1y5qqsc > .domain-icon > path').click();

        cy.pause();

        cy.wait(5000);
        cy.eyesCheckWindow({
                    matchLevel: 'Layout',
                    tag: "Login Page",
                    target: 'Login',
                    fully: true
                });*/
                //cy.pause();

    } catch (Exception) {
            e.printStackTrace();
        } finally  {
            cy.eyesClose()
        };
        // Call Close on eyes to let the server know it should display the results
        //cy.eyesClose()
    });

});
