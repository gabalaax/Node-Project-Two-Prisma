import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function seed() {
    try {

        //  await prisma.author.deleteMany();
        //  await prisma.book.deleteMany();
        // await prisma.bookStore.deleteMany();

        //  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Author"`;
        //  await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Book"`;
        // await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="BookStore"`;


        //author
        await prisma.author.create({
            data: {
                name: 'habeen wanaagsan',

            }
        })
        await prisma.author.create({
            data: {
                name: 'maxaa ku barideen'
            }
        })
        await prisma.author.create({
            data: {
                name: 'nasradin abdikani'
            }
        })

        //book
        await prisma.book.create({
            data: {
                author: {
                    create: {
                        name: 'gabalaax',
                    },
                },

                title: 'ismalure',
                price: 99,
                image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fmaktabaddaiqra%2Fphotos%2Fa.2132877866957620%2F3212569802321749%2F%3Ftype%3D3&psig=AOvVaw2RrdRNG-aMva-4-sSE1jGq&ust=1694835246757000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCCs7jXq4EDFQAAAAAdAAAAABAE"

            }
        })
        await prisma.book.create({
            data: {
                author: {
                    create: {
                        name: 'nadiif',
                    },
                },

                title: 'dhabanahays',
                price: 199,
                image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81iJJtiIdZL._AC_UL210_SR210%2C210_.jpg&tbnid=ujAESgsQNHGAGM&vet=12ahUKEwjuiqaC2KuBAxVtnycCHXyzCFsQMygCegQIARA3..i&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FDhabannahays-Xusuusqorka-dhurwaagii-dhiman-waayay%2Fdp%2F0995753377&docid=huOeqgU7xGLYEM&w=210&h=210&q=dhabanaheys&ved=2ahUKEwjuiqaC2KuBAxVtnycCHXyzCFsQMygCegQIARA3"

            }
        })
        await prisma.book.create({
            data: {
                author: {
                    create: {
                        name: 'jigjigaawi',
                    },
                },

                title: 'sayid maxamed cabdule xasan ',
                price: 9999,
                image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fgoobjoog.com%2Fwp-content%2Fuploads%2F2015%2F12%2FSayid.jpg&tbnid=5P77VuQzeyeBvM&vet=12ahUKEwjpvIee2KuBAxVTmCcCHYlnCloQMygBegQIARBa..i&imgrefurl=https%3A%2F%2Fgoobjoog.com%2Ftaariikhdii-iyo-xusuustii-sayidka-maxamed-cabdulle-xasan%2F&docid=j55evrjWZUsNvM&w=640&h=480&q=sayid%20maxamed%20cabdulle%20xasan&ved=2ahUKEwjpvIee2KuBAxVTmCcCHYlnCloQMygBegQIARBa"

            }
        })
        await prisma.book.create({
            data: {
                author: {
                    create: {
                        name: 'duran ali',
                    },
                },

                title: 'Modern History of the Somali (Eastern African Studies)',
                price: 99,
                image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FModern-History-Eastern-African-Studies%2Fdp%2F082141495X&psig=AOvVaw2U_eiVigFK6NeHd5uaVSXL&ust=1694835591298000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjnsdzYq4EDFQAAAAAdAAAAABAE"
            }
        })


        //bookstore
        await prisma.bookstore.create({
            data: {
                book: {
                    connect: {
                        id: 1
                    }
                },
                name: "geeljire book store",
                location: "jigjiga soomali galbeed"
            }
        })
        await prisma.bookstore.create({
            data: {
                book: {
                    connect: {
                        id: 2
                    }
                },
                name: "muqdisho book store",
                location: "somalia "
            }
        })


        console.log("seeding is done")

    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

seed();